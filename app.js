require("dotenv-safe").config({ allowEmptyValues: true });

global.io = undefined;
global.__basedir = __dirname;

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const rfs = require("rotating-file-stream");

const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const createLocaleMiddleware = require("express-locale");
const { startPolyglot } = require("./src/utils/polyglot");

const app = express();

const usersRouter = require("./src/routes/users");
const authRouter = require("./src/routes/auth");
const eventsRouter = require("./src/routes/events");
const announcementsRouter = require("./src/routes/announcements");
const advertisementsRouter = require("./src/routes/advertisements");
const filesRouter = require("./src/routes/files");
const rolesRouter = require("./src/routes/roles");
const platesRouter = require("./src/routes/plates");
const carsRouter = require("./src/routes/cars");
const dashboardRouter = require("./src/routes/dashboard");

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});

app.use(
  Sentry.Handlers.requestHandler({
    ip: true,
    request: ["data", "headers"],
    user: ["code"],
  })
);
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // 100 request per ip per 15 min
});

app.use(
  createLocaleMiddleware({
    priority: ["accept-language", "default"],
    default: "en_US", // ar
  })
);

app.use(startPolyglot);
app.use(helmet());
app.use(cors());
app.use(compression());

var logToFile = rfs.createStream(`${new Date().toISOString()}.log`, {
  interval: "1d",
  path: path.join(__dirname, "logs"),
});

app.use(
  logger(
    process.env.NODE_ENV === "production"
      ? ":date[iso] :method url=:url user=:remote-user user_ip=:remote-addr status=:status user_agent=:user-agent"
      : ":date[iso] :method url=:url status=:status user_agent=:user-agent",
    {
      stream: process.env.NODE_ENV === "production" ? logToFile : null,
    }
  )
);

process.env.NODE_ENV === "production" && app.use(limiter);

// default content-type: application/json | text/html
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.set(
    "Content-Type",
    req.accepts().includes("text/html") ? "text/html" : "application/json"
  );
  res.set("Accept-Encoding", "gzip");
  if (req.method === "OPTIONS") {
    // send OK status directly
    res.sendStatus(200);
  } else {
    // proceed next
    next();
  }
});

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/events", eventsRouter);
app.use("/api/announcements", announcementsRouter);
app.use("/api/advertisements", advertisementsRouter);
app.use("/api/files", filesRouter);
app.use("/api/roles", rolesRouter);
app.use("/api/plates", platesRouter);
app.use("/api/cars", carsRouter);
app.use("/api/dashboard", dashboardRouter);

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.use(
  Sentry.Handlers.errorHandler({
    shouldHandleError(error) {
      return process.env.NODE_ENV === "production" || false;
    },
  })
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  const status = err.status || 500;
  res.status(status);

  // debug console
  if (status === 500) {
    if (process.env.NODE_ENV === "production") {
      Sentry.captureException(err.stack);
    } else {
      console.error(err.stack);
    }
  }

  if (req.accepts().includes("text/html")) {
    // render the error page
    res.render("error");
  } else {
    // force response json
    res.set("Content-Type", "application/json");
    const _data = {};
    _data.error =
      status === 500 ? req.polyglot.t("general.error") : err.message;
    if (err.data) {
      _data.data = err.data;
    }
    res.send(_data);
  }
});

module.exports = app;

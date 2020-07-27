const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "people",
    webpackConfigEnv,
  });

  const rxjsExternals = {
    externals: [/^rxjs\/?.*$/],
  };

  return webpackMerge.smart(defaultConfig, rxjsExternals, {
    // customizations go here
    externals: [/^ag-grid-react\/?.*$/],
    // resolve: {
    //   alias: {
    //     "react-dom": "react-dom/profiling",
    //     "scheduler/tracing": "scheduler/tracing-profiling",
    //   },
    // },
    // externals: ["react"],
    resolve: {
      alias: {
        react: path.resolve("node_modules/react"),
      },
    },
  });
};

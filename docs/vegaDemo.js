"use strict";     // the code should be executed in "strict mode".
                  // With strict mode, you can not, for example, use undeclared variables
// This template is adopted from https://observablehq.com/@vega/vega-lite-api-v5 Stand-Alone Usage in a Web Browser section
const options = {
  config: {
    // Vega-Lite default configuration
  },
  init: (view) => {
    // initialize tooltip handler
    view.tooltip(new vegaTooltip.Handler().call);
  },
  view: {
    // view constructor options
    // remove the loader if you don't want to default to vega-datasets!
    //   loader: vega.loader({
    //     baseURL: "",
    //   }),
    renderer: "canvas",
  },
};

vl.register(vega, vegaLite, options);

const yahooFinance = require("yahoo-finance2").default;
const insightsRouter = require("express").Router();

insightsRouter.get("/:ticker/:reportsCount", async (request, response) => {
  const { ticker, reportsCount } = request.params;

  const queryOptions = { lang: "en-US", reportsCount };
  try {
    const result = await yahooFinance.insights(ticker, queryOptions);

    if (result) {
      response.json(result);
    }
  } catch (error) {
    response
      .status(500)
      .json({ error: `Failed to get insight data for ${ticker}` });
  }
});

module.exports = insightsRouter;

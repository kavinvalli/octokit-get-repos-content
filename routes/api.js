const router = require("express").Router();
const { Octokit } = require("octokit");

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});

router.get("/content", async (_, res) => {
  const { data } = await octokit.rest.repos.getContent({
    owner: "kavinvalli",
    repo: "kavinvalli.github.io",
  });
  // console.log(data);
  return res.json(data);
});

router.get("/content/:path", async (req, res) => {
  const { path } = req.params;
  const { data } = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: "kavinvalli",
      repo: "kavinvalli.github.io",
      path,
    }
  );
  return res.json({
    content: Buffer.from(data.content, data.encoding).toString(),
  });
});

module.exports = router;

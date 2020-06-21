# Workflows

Replacing [Travis CI](https://travis-ci.org/) as this project's primary CI/CD tool, [GitHub Actions](https://help.github.com/en/actions) uses workflows to perform operations when specific events within the repository occur. Workflows are specified in YAML and can utilize shared components from other GitHub Actions to form expansive  pipelines.

These workflows should appear within pull requests as status indicators that denote "pending”, “success”, “failure”, or “error", and should contain detail links to view the workflows and their individual steps therein. Additionally, these workflow runs should be visible by clicking the `Actions` tab in the repository's menu at the top of the repository's main page.

As it currently stands, the workflow structure is broken into folders denoting what the workflow is for:

```text
workflows/
  lint/
  test/
```

- `lint/` refers to all workflows related to linting individual pull requests and direct commits.
- `test/` refers to all workflows related to testing individual pull requests and direct commits.

Check project for common errors

━━━ Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

$ bud doctor

━━━ Options ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  --input,-i,--@src,--src #0       Source directory (relative to project)
  --output,-o,--@dist,--dist #0    Distribution directory (relative to project)
  --notify                         Enable notfication center messages

━━━ Details ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The `bud doctor` command will:

1. validate the `production` configuration with `webpack`

`webpack` exports a `validate` function which is used by this command to verify 
that the configuration matches the `webpack` configuration schema.

2. check the `dependencies` and `devDependencies` in the `package.json` file.

In general, `bud.js` dependencies should be kept at the same version. This 
script doesn't account for a lot of edge cases so it might return a false 
positive.

━━━ Examples ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Check compiled configuration against webpack
  $ bud doctor
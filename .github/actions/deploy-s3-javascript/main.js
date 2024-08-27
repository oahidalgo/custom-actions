const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  //1) Get some input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // 2) Upload files to S3

  exec.exec(
    `aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`
  );

  core.notice('Hello from my custom JavaScript action');
}

run();

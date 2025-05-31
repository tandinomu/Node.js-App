@Library('nodejs-pipeline-library') _

nodeJSPipeline {
    nodeVersion = '18'
    testScript = 'test'
    dockerRepo = 'kanishapradhan'  // Replace with your DockerHub username
    imageName = 'example-app'
    registryCredentials = 'dockerhub-credentials'
    runTests = true
    buildDocker = true
    pushToRegistry = true
}
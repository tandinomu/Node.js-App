pipeline {
  agent any
  tools {
    nodejs 'NodeJS 24.0.2'
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test -- --ci --passWithNoTests'
      }
    }

    stage('Build') {
      steps {
        sh 'echo "Build completed - no build script needed for this project"'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo "Deploying to staging..."'
      }
    }
  }
}
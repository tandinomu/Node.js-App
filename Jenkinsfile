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
        sh 'npm test -- --ci --reporters=jest-junit --passWithNoTests'
      }
      post {
        always {
          script {
            if (fileExists('junit.xml')) {
              junit 'junit.xml'
            } else {
              echo 'No junit.xml file found, skipping test results'
            }
          }
        }
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo "Deploying to staging..."'
      }
    }
  }
}
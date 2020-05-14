pipeline {
  agent {
    docker {
      image 'node:latest'
      args '-u 0'
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''npm install
npm run build:prod
          '''
      }
    }

  }
}
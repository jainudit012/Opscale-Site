pipeline {
  agent {
    docker {
      image 'node:latest'
      args '-u 0'
    }

  }
  stages {
    stage('install') {
      steps {
        sh './jenkins/install.sh'
      }
    }

    stage('build') {
      steps {
        sh './jenkins/build.sh'
      }
    }

    stage('Deliver') {
      options {
        timeout(time: 120, unit: 'SECONDS')
      }
      steps {
        sh './jenkins/deliver.sh'
        input(message: 'Finished building the web site? (Click "Deploy" to update on FIREBASE)', ok: 'Deploy')
        sh './jenkins/exit.sh'
      }
    }

  }
  post {
    aborted {
      echo 'Website not updated on FIREBASE!!!'
    }

  }
}
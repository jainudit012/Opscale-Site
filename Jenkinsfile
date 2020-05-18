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
        sh 'bash ./jenkins/install.sh'
      }
    }

    stage('build') {
      steps {
        sh 'bash ./jenkins/build.sh'
      }
    }

    stage('Deliver') {
      steps {
        sh 'bash ./jenkins/deliver.sh'
        input(message: 'Finished building the web site? (Click "Deploy" to update on FIREBASE)', ok: 'Deploy')
        sh 'bash ./jenkins/exit.sh'
      }
    }

  }
  post {
    aborted {
      echo 'Website not updated on FIREBASE!!!'
    }

  }
}
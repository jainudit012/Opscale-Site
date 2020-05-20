pipeline {
  agent {
    docker {
      image 'node:latest'
      args '-u 0'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'bash ./jenkins/install.sh'
      }
    }

    stage('Build') {
      steps {
        sh 'bash ./jenkins/build.sh'
      }
    }

    stage('Deliver') {
      steps {
        input(message: 'Finished building the web site? (Click "Deploy" to update on FIREBASE)', ok: 'Deploy')
      }
    }

    stage('Deploy') {
      steps {
        sh 'bash ./jenkins/deploy.sh'
      }
    }

  }
  post {
    aborted {
      echo 'Website not updated on FIREBASE!!!'
    }

  }
}
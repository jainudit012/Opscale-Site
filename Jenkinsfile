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
        sh '''./install.sh'''
      }
    }

    stage('build') {
      steps {
        sh '''./build.sh'''
      }
    }

  }
}
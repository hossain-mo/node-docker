pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3001:3000' 
            sh 'docker version'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
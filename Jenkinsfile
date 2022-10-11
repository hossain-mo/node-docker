pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3001:3000' 
            image 'docker'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'docker version' 
            }
        }
    }
}
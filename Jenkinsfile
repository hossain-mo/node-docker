pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3002:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm start' 
            }
        }
    }
}
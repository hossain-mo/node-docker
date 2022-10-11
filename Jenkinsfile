pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3002:3000' 
        }
    }
    stages {
        stage('docker-compose up') {
          steps {
            sh 'docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build'
          }
        }
        
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm start' 
            }
        }
    }
}
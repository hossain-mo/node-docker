pipeline {
    agent any

    stages {
        stage('Build') { 
            steps {
                //sh 'npm install' 
                sh 'docker version' 
                sh 'docker-compose version' 
            }
        }
    }
}
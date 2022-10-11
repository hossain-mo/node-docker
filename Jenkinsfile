pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'docker-compose version' 
                sh 'docker version' 
            }
        }
    }
}
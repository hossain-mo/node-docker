pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'docker-compose install' 
                sh 'docker version' 
            }
        }
    }
}
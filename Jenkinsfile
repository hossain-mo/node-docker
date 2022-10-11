pipeline {
    agent any
    stages {
        // stage('Build') { 
        //     steps {
        //         sh 'npm install' 
        //     }
        // }
        stage('test') { 
            steps ('DockerComposeBuilder'){
                sh 'docker version' 
                sh 'docker compose version' 
                sh 'docker-compose version' 
                // sh 'npm start' 
            }
        }
    }
}
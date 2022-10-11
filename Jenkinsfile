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
                sh 'docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d' 
                sh 'npm start' 
            }
        }
    }
}
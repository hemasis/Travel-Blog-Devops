pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                echo 'Cloning repo...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    dockerImage = docker.build("travel-blog")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                sh '''
                    docker stop travel-blog-container || true
                    docker rm travel-blog-container || true
                    docker run -d -p 8080:80 --name travel-blog-container travel-blog
                '''
            }
        }
    }
}

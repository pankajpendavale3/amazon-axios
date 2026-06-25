pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh '''
                    npm install --no-audit --no-fund
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                    npm run build
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    sudo mkdir -p /var/www/html
                    sudo cp -r dist/* /var/www/html/
                '''
            }
        }

    }
}
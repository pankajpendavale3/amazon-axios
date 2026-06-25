pipeline {
    agent any

    stage('Install Dependencies') {
    steps {
        sh '''
        npm cache clean --force
        npm install --no-audit --no-fund
        '''
    }
}

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                mkdir -p /var/www/html
                cp -r dist/* /var/www/html/
                '''
            }
        }
    }
}
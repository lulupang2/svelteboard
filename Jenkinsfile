pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "/home/ubuntu/.nvm/versions/node/v17.9.0/bin/yarn install"
                sh "CI=false /home/ubuntu/.nvm/versions/node/v17.9.0/bin/yarn build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo systemctl restart nginx"
            }
        }
    }
}

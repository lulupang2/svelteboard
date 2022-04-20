pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "/usr/local/bin/yarn"                
                sh "CI=false /usr/local/bin/yarn build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo systemctl restart nginx"
            }
        }
    }
}

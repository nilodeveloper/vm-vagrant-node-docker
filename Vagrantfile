$script = <<-SCRIPT
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose up
SCRIPT

Vagrant.configure("2") do |config| 
	config.vm.box = "hashicorp/bionic64"
	config.vm.network "forwarded_port", guest: 3000, host: 5000
	config.vm.provision "file", source: "./server.js", destination: "server.js"
	config.vm.provision "file", source: "./docker-compose.yaml", destination: "docker-compose.yaml"
	config.vm.provision "file", source: "./Dockerfile", destination: "Dockerfile"
	config.vm.provision "docker",
		images: ["ubuntu"]
	config.vm.provision "shell", inline: $script 
end

package driver

import docker "github.com/fsouza/go-dockerclient"

//Currently Windows containers don't support host ip in port binding.
func getPortBinding(ip string, port string) []docker.PortBinding {
	return []docker.PortBinding{docker.PortBinding{HostIP: "", HostPort: port}}
}

# Bug Bounty Subdomain Enumeration Cheatsheet

## Amass

```bash
amass enum -d target.com -o amass.txt
```

```bash
amass enum -active -d target.com -o active_amass.txt
amass enum -passive -d target.com -o passive_amass.txt
```

## Assetfinder

```bash
assetfinder target.com -subs-only | tee -a assetfinder.txt
```

## Chaos Client

### Installation

```bash
go install github.com/projectdiscovery/chaos-client/cmd/chaos@latest
sudo cp ~/go/bin/chaos /usr/bin/
```

### Update Chaos

```bash
sudo chaos -up
```

### Set API Key

Go to the URL [ProjectDiscovery API Key](https://cloud.projectdiscovery.io/?ref=api_key) to generate your API key.

```bash
export PDCP_API_KEY=c2f00f66-a466-45a7-945f-c20d80ec15b9
```

### Basic Scan

```bash
chaos -d target.com -o chaos.txt
```

## crt.sh

### Installation

```bash
git clone https://github.com/YashGoti/crtsh.py.git
cd crtsh.py
mv crtsh.py crtsh
chmod +x crtsh
sudo cp crtsh /usr/bin/
```

### Usage

```bash
crtsh -d target.com | tee -a crtsh.txt
```

## Findomain

### Installation

```bash
wget https://github.com/Findomain/Findomain/releases/download/9.0.4/findomain-aarch64.zip
unzip findomain-aarch64.zip
chmod +x findomain
sudo cp findomain /usr/bin/
```

### Usage

```bash
findomain --output --target target.com
```

## GitHub Subdomains

### Installation

```bash
go install github.com/gwen001/github-subdomains@latest
sudo cp ~/go/bin/github-subdomains /usr/bin/
```

### Set GitHub Token

Log in to your GitHub account and generate a personal access token at [GitHub Tokens](https://github.com/settings/tokens).

```bash
export GITHUB_TOKEN={token}
```

### Usage

```bash
github-subdomains -d target.com -o githubsubdomains.txt
```

## Subfinder

```bash
subfinder -d target.com | tee -a subfinder.txt
```

### Update Subfinder

```bash
sudo subfinder -up
```

## Sublist3r

```bash
sublist3r -n -d target.com -o sublist3r.txt
```

## SubEnum

### Installation

```bash
git clone https://github.com/bing0o/SubEnum.git
cd SubEnum
chmod +x setup.sh
./setup.sh
```

### Usage

```bash
./subenum.sh -d target.com
```

## VirusTotal Subdomains

```bash
curl -s "https://www.virustotal.com/ui/domains/target.com/subdomains?limit=40" | grep -Po "((http|https):\\/\\/)?(([\w.-]*)\\.([\w]*)\\.([A-z]))\\w+" | sort -u

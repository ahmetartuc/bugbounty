#!/bin/bash

subdomain_file="subdomains.txt"

evil_origin="http://evil.com"

output_file="cors_results.txt"
> "$output_file"  # clear previous content

while read -r subdomain; do
    echo "[*] Testing $subdomain"
    
    response=$(curl -s -i -H "Origin: $evil_origin" -H "Host: $subdomain" "https://$subdomain" --max-time 10)

    if echo "$response" | grep -qi "Access-Control-Allow-Origin: $evil_origin"; then
        echo "[+] POTENTIAL CORS VULNERABILITY: $subdomain" | tee -a "$output_file"
    fi

done < "$subdomain_file"

echo "[*] Scan complete. Results saved in $output_file"

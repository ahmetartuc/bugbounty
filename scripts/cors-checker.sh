#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color (reset to normal)

echo -ne "${GREEN}Enter the target URL: ${NC}"
read TARGET_URL

echo -ne "${RED}Enter the Origin URL: ${NC}"
read ORIGIN_URL

echo -e "\n[+] Sending request..."
echo -e "Target: $TARGET_URL"
echo -e "Origin: $ORIGIN_URL\n"

RESPONSE=$(curl -s -i -H "Origin: $ORIGIN_URL" "$TARGET_URL")

echo "$RESPONSE"

if echo "$RESPONSE" | grep -q "Access-Control-Allow-Origin: $ORIGIN_URL"; then
    echo -e "${GREEN}\n[+] SUCCESS! Origin accepted.${NC}"
else
    echo -e "${RED}\n[-] FAILED. Origin rejected or header not present.${NC}"
fi

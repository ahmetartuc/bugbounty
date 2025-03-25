## Features

- Checks if a given URL is accessible via curl.
- Detects common HTTP failures: 401,403,404,410,429,500,502,503,504.
---

```bash
#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

URL="$1"

if [ -z "$URL" ]; then
  echo -e "${RED}Usage: $0 <url>${NC}"
  exit 1
fi

echo -e "[*] Checking URL: $URL"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$URL")

if [ "$HTTP_CODE" == "200" ]; then
  echo -e "${GREEN}[✓] URL is accessible: $URL${NC}"
  exit 0
elif [[ "$HTTP_CODE" =~ ^(401|403|404|410|429|500|502|503|504)$ ]]; then
  echo -e "${RED}[!] URL returned $HTTP_CODE – checking Wayback Machine...${NC}"
else
  echo -e "${RED}[!] URL returned $HTTP_CODE – skipping archive fallback.${NC}"
  exit 1
fi

ENCODED_URL=$(python3 -c "import urllib.parse; print(urllib.parse.quote('''$URL'''))")
ARCHIVE_API="https://archive.org/wayback/available?url=$ENCODED_URL"

RESPONSE=$(curl -s "$ARCHIVE_API")
ARCHIVED_URL=$(echo "$RESPONSE" | grep -oP '"url":\s*"\K[^"]+')

if [ -n "$ARCHIVED_URL" ]; then
  echo -e "${GREEN}[✓] Found in archive: $ARCHIVED_URL${NC}"
else
  echo -e "${RED}[✗] Not found in Wayback Machine.${NC}"
fi
```

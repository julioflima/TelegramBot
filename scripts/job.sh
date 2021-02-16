## Init Loop
while :; do
    echo "Sending message!"
    curl -G "http://localhost:3333/job" --data-urlencode "msg=This is a test for Mohil!!! 🤝"
    sleep 30
done

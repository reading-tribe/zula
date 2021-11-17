while getopts c: flag
do
    case "${flag}" in
        c) command=${OPTARG};;
    esac
done

if [ "$command" = "api" ]; then
    echo "Command: $command";
    echo "Starting Zula API in development mode...";
    MONGO_CONNECTION_STRING=mongodb://localhost:27017 go run cmd/api/main.go
    exit 0
fi

if [ "$command" = "seeder" ]; then
    echo "Command: $command";
    echo "Running seeder in development mode...";
    MONGO_CONNECTION_STRING=mongodb://localhost:27017 go run cmd/seeder/main.go
    exit 0
fi

echo "Unrecognised command"
exit 1

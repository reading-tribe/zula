while getopts c: flag
do
    case "${flag}" in
        c) command=${OPTARG};;
    esac
done

if [ "$command" = "webapp" ]; then
    echo "Command: $command";
    echo "Running webapp in development mode...";
    REACT_APP_API_URL=http://localhost:1323/api/v1 npm start
    exit 0
fi

if [ "$command" = "storybook" ]; then
    echo "Command: $command";
    echo "Running storybook";
    npm run storybook
    exit 0
fi

echo "Unrecognised command"
exit 1

# Check if Volta is already installed
if ! command -v volta &> /dev/null; then
    # Install Volta
    curl https://get.volta.sh | bash
    echo "Please finish setting up volta as defined here: https://docs.volta.sh/guide/getting-started"
    # Todo: add volta configuration
fi
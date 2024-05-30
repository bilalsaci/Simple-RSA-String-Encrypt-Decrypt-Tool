function encrypt() {
            var plaintext = document.getElementById("plaintext").value;
            var publicKey = document.getElementById("publicKey").value;

            var encrypt = new JSEncrypt();
            encrypt.setPublicKey(publicKey);

            var ciphertext = encrypt.encrypt(plaintext);
            if (ciphertext === false) {
                alert("Encryption failed. Please check the public key and try again.");
            } else {
                document.getElementById("ciphertext").value = ciphertext;
            }
        }

        function decrypt() {
            var ciphertext = document.getElementById("ciphertext").value;
            var privateKey = document.getElementById("privateKey").value;

            var decrypt = new JSEncrypt();
            decrypt.setPrivateKey(privateKey);

            var plaintext = decrypt.decrypt(ciphertext);
            if (plaintext === false) {
                alert("Decryption failed. Please check the private key and try again.");
            } else {
                document.getElementById("plaintext").value = plaintext;
            }
        }

function copyToClipboard(elementId) {
            var copyText = document.getElementById(elementId);
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text inside the textarea
            document.execCommand("copy");

            // Alert the copied text (optional)
            alert(elementId.charAt(0).toUpperCase() + elementId.slice(1) + " copied to clipboard!");
        }
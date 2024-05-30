function encrypt() {
            var plaintext = document.getElementById("plainText").value;
            var publicKey = document.getElementById("publicKey").value;

            var encrypt = new JSEncrypt();
            encrypt.setPublicKey(publicKey);

            var ciphertext = encrypt.encrypt(plaintext);
            if (ciphertext === false) {
                alert("Encryption failed. Please check the public key and try again.");
            } else {
                document.getElementById("cipherResult").value = ciphertext;
            }
        }

        function decrypt() {
            var ciphertext = document.getElementById("cipherText").value;
            var privateKey = document.getElementById("privateKey").value;

            var decrypt = new JSEncrypt();
            decrypt.setPrivateKey(privateKey);

            var plaintext = decrypt.decrypt(ciphertext);
            if (plaintext === false) {
                alert("Decryption failed. Please check the private key and try again.");
            } else {
                document.getElementById("plainResult").value = plaintext;
            }
        }

function copyToClipboard(elementId) {
            var copyText = document.getElementById(elementId);
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text inside the textarea
            document.execCommand("copy");
        }
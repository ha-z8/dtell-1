let discordUser = null;
let currentLang = 'ar';

const CLIENT_ID = "1552770073121394810"; 
const REDIRECT_URI = window.location.origin + window.location.pathname;
const FIXED_WEBHOOK_URL = "https://discord.com/api/webhooks/1263070844104609824/XHeyb5KvxD9fFaapYOeNdHUQwG4eqUPa9sqLS8-Kz3sxV-t1BYYqcMFZldyOfk_z9SXV";

function openModal(type) {
    const modal = document.getElementById('infoModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    if (type === 'terms') {
        title.textContent = langData[currentLang].termsTitle;
        body.innerHTML = langData[currentLang].termsText;
    } else if (type === 'privacy') {
        title.textContent = langData[currentLang].privacyTitle;
        body.innerHTML = langData[currentLang].privacyText;
    } else if (type === 'rights') {
        title.textContent = langData[currentLang].rightsTitle;
        body.innerHTML = langData[currentLang].rightsText;
    }

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const htmlRoot = document.getElementById('htmlRoot');
    
    htmlRoot.setAttribute('lang', currentLang);
    htmlRoot.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.getElementById('langText').textContent = currentLang === 'ar' ? 'English' : 'العربية';

    if (currentLang === 'ar') {
        document.getElementById('brandLogoImg').src = "dtell logo/5.png"; 
        document.getElementById('footerBrandLogo').src = "dtell logo/5.png"; 
        document.getElementById('sectionBadgeImg').src = "dtell logo/8.png";
        document.getElementById('previewTitleBadge').src = "dtell logo/3.png"; 
    } else {
        document.getElementById('brandLogoImg').src = "dtell logo/4.png"; 
        document.getElementById('footerBrandLogo').src = "dtell logo/4.png"; 
        document.getElementById('sectionBadgeImg').src = "dtell logo/9.png";
        document.getElementById('previewTitleBadge').src = "dtell logo/2.png"; 
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[currentLang][key]) {
            el.innerHTML = langData[currentLang][key];
        }
    });

    document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
        const key = el.getAttribute('data-placeholder-i18n');
        if (langData[currentLang][key]) {
            el.setAttribute('placeholder', langData[currentLang][key]);
        }
    });

    updatePreview();
}

const colorPicker = document.getElementById('embedColor');
const colorHexText = document.getElementById('colorHexText');

colorPicker.addEventListener('input', (e) => {
    colorHexText.value = e.target.value;
    document.getElementById('embedPreviewBorder').style.borderLeftColor = e.target.value;
});

function formatText(type) {
    const textarea = document.getElementById('embedDescription');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end) || "text";
    let replacement = "";

    switch(type) {
        case 'bold': replacement = `**${selectedText}**`; break;
        case 'italic': replacement = `*${selectedText}*`; break;
        case 'code': replacement = `\`${selectedText}\``; break;
        case 'codeblock': replacement = `\`\`\`\n${selectedText}\n\`\`\``; break;
        case 'quote': replacement = `> ${selectedText}`; break;
        case 'spoiler': replacement = `||${selectedText}||`; break;
    }

    textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
    updatePreview();
}

document.getElementById('addMentionBtn').addEventListener('click', () => {
    const container = document.getElementById('mentionsContainer');
    const div = document.createElement('div');
    div.className = 'mention-input-group';
    div.innerHTML = `
        <input type="text" class="mention-input" data-placeholder-i18n="phMention" placeholder="${langData[currentLang].phMention}" oninput="updatePreview()">
        <button type="button" class="remove-mention" onclick="this.parentElement.remove(); updatePreview();"><i class="fa-solid fa-trash"></i></button>
    `;
    container.appendChild(div);
});

const inputsToWatch = ['embedTitle', 'authorName', 'authorIcon', 'embedDescription', 'imageUrl', 'thumbnailUrl', 'fieldName', 'fieldValue', 'footerText', 'footerIcon'];
inputsToWatch.forEach(id => {
    document.getElementById(id).addEventListener('input', updatePreview);
});

document.addEventListener('input', (e) => {
    if (e.target.classList.contains('mention-input')) {
        updatePreview();
    }
});

function parseDiscordMarkdown(text) {
    if (!text) return langData[currentLang].prevDescDefault;
    let parsed = text
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
        .replace(/\*([^*]+)\*/g, '<i>$1</i>');
    return parsed;
}

function updatePreview() {
    const title = document.getElementById('embedTitle').value;
    const author = document.getElementById('authorName').value;
    const authorIcon = document.getElementById('authorIcon').value;
    const desc = document.getElementById('embedDescription').value;
    const img = document.getElementById('imageUrl').value;
    const thumb = document.getElementById('thumbnailUrl').value;
    const fName = document.getElementById('fieldName').value;
    const fVal = document.getElementById('fieldValue').value;
    const footer = document.getElementById('footerText').value;
    const footerIcon = document.getElementById('footerIcon').value;

    const revealIdentity = discordUser ? document.getElementById('revealIdentity').checked : false;

    if (discordUser && revealIdentity) {
        document.getElementById('prevBotName').textContent = discordUser.global_name;
        document.getElementById('prevBotAvatar').src = discordUser.avatar;
    } else {
        document.getElementById('prevBotName').textContent = langData[currentLang].botDefaultName;
        document.getElementById('prevBotAvatar').src = "dtell logo/11.png";
    }

    const mentionInputs = document.querySelectorAll('.mention-input');
    let mentionsList = [];
    mentionInputs.forEach(input => {
        const val = input.value.trim();
        if (val) {
            const clean = val.replace("@", "");
            mentionsList.push(/^\d+$/.test(clean) ? `@User` : `@${clean}`);
        }
    });

    const mentionsBar = document.getElementById('prevMentionsText');
    if (mentionsList.length > 0) {
        mentionsBar.textContent = `${mentionsList.join(" ")} ${langData[currentLang].mentionPrefix}`;
        mentionsBar.style.display = 'block';
    } else {
        mentionsBar.style.display = 'none';
    }

    document.getElementById('prevTitle').textContent = title || langData[currentLang].prevTitleDefault;
    document.getElementById('prevDesc').innerHTML = parseDiscordMarkdown(desc);
    
    if (author) {
        document.getElementById('prevAuthorLine').style.display = 'flex';
        document.getElementById('prevAuthorName').textContent = author;
        const iconEl = document.getElementById('prevAuthorIcon');
        if (authorIcon) { iconEl.src = authorIcon; iconEl.style.display = 'block'; } else { iconEl.style.display = 'none'; }
    } else {
        document.getElementById('prevAuthorLine').style.display = 'none';
    }

    if (fName && fVal) {
        document.getElementById('prevFieldBox').style.display = 'block';
        document.getElementById('prevFieldName').textContent = fName;
        document.getElementById('prevFieldValue').textContent = fVal;
    } else {
        document.getElementById('prevFieldBox').style.display = 'none';
    }

    const imgContainer = document.getElementById('prevImageContainer');
    const imgEl = document.getElementById('prevImage');
    if (img) { imgEl.src = img; imgContainer.style.display = 'block'; } else { imgContainer.style.display = 'none'; }

    const thumbContainer = document.getElementById('prevThumbContainer');
    const thumbEl = document.getElementById('prevThumbnail');
    if (thumb) { thumbEl.src = thumb; thumbContainer.style.display = 'block'; } else { thumbContainer.style.display = 'none'; }

    const footerLine = document.getElementById('prevFooterLine');
    const footerEl = document.getElementById('prevFooter');
    const fIconEl = document.getElementById('prevFooterIcon');
    if (footer) { 
        footerEl.textContent = footer; 
        footerLine.style.display = 'flex'; 
        if (footerIcon) { fIconEl.src = footerIcon; fIconEl.style.display = 'block'; } else { fIconEl.style.display = 'none'; }
    } else { 
        footerLine.style.display = 'none'; 
    }
}

document.getElementById('discordLoginBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=token&scope=identify`;
    window.location.href = discordAuthUrl;
});

window.addEventListener('DOMContentLoaded', async () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const accessToken = fragment.get('access_token');

    if (accessToken) {
        try {
            const response = await fetch('https://discord.com/api/users/@me', {
                headers: { authorization: `Bearer ${accessToken}` }
            });
            const data = await response.json();
            
            if (data.id) {
                let avatarUrl = `dtell logo/11.png`;
                if (data.avatar) {
                    const format = data.avatar.startsWith('a_') ? 'gif' : 'png';
                    avatarUrl = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.${format}`;
                }

                discordUser = {
                    id: data.id,
                    username: data.username,
                    global_name: data.global_name || data.username,
                    avatar: avatarUrl
                };

                document.getElementById('authSection').innerHTML = `
                    <div class="user-profile">
                        <img src="${discordUser.avatar}" alt="Avatar">
                        <div class="user-info">
                            <span class="user-name">${discordUser.global_name}</span>
                            <span class="user-tag">@${discordUser.username}</span>
                        </div>
                    </div>
                `;

                document.getElementById('identityControlBox').style.display = 'block';
                window.history.replaceState({}, document.title, window.location.pathname);
                updatePreview();
            }
        } catch (err) { console.error("فشل جلب الحساب:", err); }
    }
    updatePreview();
});

document.getElementById('revealIdentity').addEventListener('change', updatePreview);

document.getElementById("dtellForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const mentionInputs = document.querySelectorAll('.mention-input');
    let mentionsList = [];
    mentionInputs.forEach(input => {
        const val = input.value.trim();
        if (val) {
            const clean = val.replace("@", "");
            mentionsList.push(/^\d+$/.test(clean) ? `<@${clean}>` : `@${clean}`);
        }
    });

    let contentMessage = mentionsList.length > 0 ? `${mentionsList.join(" ")} ${langData[currentLang].mentionPrefix}` : undefined;

    const embedTitle = document.getElementById("embedTitle").value.trim();
    const authorName = document.getElementById("authorName").value.trim();
    const authorIcon = document.getElementById("authorIcon").value.trim();
    const embedDescription = document.getElementById("embedDescription").value.trim();
    const imageUrl = document.getElementById("imageUrl").value.trim();
    const thumbnailUrl = document.getElementById("thumbnailUrl").value.trim();
    const fieldName = document.getElementById("fieldName").value.trim();
    const fieldValue = document.getElementById("fieldValue").value.trim();
    const footerText = document.getElementById("footerText").value.trim();
    const footerIcon = document.getElementById("footerIcon").value.trim();
    const colorHex = colorPicker.value;
    const submitBtn = document.getElementById("submitBtn");

    let revealIdentity = discordUser ? document.getElementById("revealIdentity").checked : false;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${langData[currentLang].sending}`;

    const decimalColor = parseInt(colorHex.replace("#", ""), 16);

    const embedObject = {
        title: embedTitle,
        description: embedDescription,
        color: decimalColor,
        timestamp: new Date().toISOString()
    };

    if (authorName) {
        embedObject.author = { name: authorName };
        if (authorIcon) embedObject.author.icon_url = authorIcon;
    }

    if (imageUrl) embedObject.image = { url: imageUrl };
    if (thumbnailUrl) embedObject.thumbnail = { url: thumbnailUrl };
    if (fieldName && fieldValue) embedObject.fields = [{ name: fieldName, value: fieldValue, inline: false }];
    
    if (footerText) {
        embedObject.footer = { text: footerText };
        if (footerIcon) embedObject.footer.icon_url = footerIcon;
    }

    const payload = {
        content: contentMessage,
        embeds: [embedObject]
    };

    if (discordUser && revealIdentity) {
        payload.username = `${discordUser.global_name} (@${discordUser.username})`;
        payload.avatar_url = discordUser.avatar;
    } else if (!embedObject.author) {
        embedObject.author = { name: "dtell - Secure Anonymous Hub 🔒" };
    }

    try {
        const response = await fetch(FIXED_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            showAlert(langData[currentLang].successMsg, "success");
            document.getElementById("embedDescription").value = "";
            document.getElementById("embedTitle").value = "";
            document.getElementById("imageUrl").value = "";
            document.getElementById("thumbnailUrl").value = "";
            updatePreview();
        } else {
            showAlert(langData[currentLang].errorMsg, "error");
        }
    } catch (error) {
        try {
            await fetch(FIXED_WEBHOOK_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            showAlert(langData[currentLang].successMsg, "success");
        } catch (err) {
            showAlert(langData[currentLang].serverErr, "error");
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${langData[currentLang].submitBtn}`;
    }
});

function showAlert(message, type) {
    const alertBox = document.getElementById("alertBox");
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    alertBox.style.display = "block";
    setTimeout(() => { alertBox.style.display = "none"; }, 5000);
}
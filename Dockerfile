FROM alpine:3.9 AS third-party 

ENV ACT_DOWNLOAD_PAGE="https://advancedcombattracker.com/includes/page-download.php"

ENV OVERLAY_PLUGIN_LATEST_RELEASE="https://github.com/hibiyasleep/OverlayPlugin/releases/latest/download/OverlayPlugin-0.3.4.0-x64-full.zip"

RUN apk update && apk add --no-cache \
    unzip \
    wget

# Advanced Combat Tracker - ZIP Archive
RUN wget -qO- "${ACT_DOWNLOAD_PAGE}?id=57" | busybox unzip -

# FFXIV Parsing Plugin
RUN wget -qO- "${ACT_DOWNLOAD_PAGE}?id=73" | busybox unzip -

# Overlay Plugin
RUN wget -qO- "${OVERLAY_PLUGIN_LATEST_RELEASE}" | busybox unzip -


FROM mono:6.0 AS cactbot

WORKDIR /workspace

COPY CactbotOverlay/ CactbotOverlay/

# Advanced Combat Tracker dependencies
COPY --from=third-party [ "Advanced Combat Tracker.exe", "./CactbotOverlay/ThirdParty/ACT/" ]
COPY --from=third-party FFXIV_ACT_Plugin.dll ./CactbotOverlay/ThirdParty/ACT/

# Overlay Plugin dependencies
COPY --from=third-party HtmlRenderer.dll ./CactbotOverlay/ThirdParty/OverlayPlugin/
COPY --from=third-party Newtonsoft.Json.dll ./CactbotOverlay/ThirdParty/OverlayPlugin/
COPY --from=third-party OverlayPlugin.dll ./CactbotOverlay/ThirdParty/OverlayPlugin/
COPY --from=third-party OverlayPlugin.Core.dll ./CactbotOverlay/ThirdParty/OverlayPlugin/
COPY --from=third-party OverlayPlugin.Common.dll ./CactbotOverlay/ThirdParty/OverlayPlugin/
COPY --from=third-party Xilium.CefGlue.dll ./CactbotOverlay/ThirdParty/OverlayPlugin/

COPY [ "Cactbot.sln", "Cactbot.csproj", "./" ]

CMD [ "msbuild", "Cactbot.sln", "/p:Configuration=Release", "/p:Platform=x64" ]

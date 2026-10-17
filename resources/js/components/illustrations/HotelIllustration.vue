<!-- Hotel scene for the login page hero (pure SVG, brand colours). -->
<template>
        <svg class="cl-auth__hero-art" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
            <!-- ground -->
            <rect x="0" y="268" width="400" height="32" fill="#2a0509" />
            <!-- glow -->
            <circle cx="200" cy="170" r="120" fill="#ffffff" opacity=".07" />
            <!-- left building -->
            <rect x="38" y="150" width="86" height="120" rx="4" fill="#7a0b16" />
            <g fill="#ff8a94" opacity=".85">
                <rect x="52" y="166" width="16" height="16" rx="2" /><rect x="82" y="166" width="16" height="16" rx="2" />
                <rect x="52" y="196" width="16" height="16" rx="2" /><rect x="82" y="196" width="16" height="16" rx="2" />
                <rect x="52" y="226" width="16" height="16" rx="2" /><rect x="82" y="226" width="16" height="16" rx="2" />
            </g>
            <!-- right building -->
            <rect x="272" y="120" width="92" height="150" rx="4" fill="#c9101f" />
            <g fill="#ffe3e5">
                <rect x="286" y="136" width="16" height="16" rx="2" /><rect x="316" y="136" width="16" height="16" rx="2" /><rect x="346" y="136" width="10" height="16" rx="2" />
                <rect x="286" y="168" width="16" height="16" rx="2" /><rect x="316" y="168" width="16" height="16" rx="2" /><rect x="346" y="168" width="10" height="16" rx="2" />
                <rect x="286" y="200" width="16" height="16" rx="2" /><rect x="316" y="200" width="16" height="16" rx="2" /><rect x="346" y="200" width="10" height="16" rx="2" />
            </g>
            <!-- main hotel -->
            <rect x="128" y="64" width="144" height="206" rx="6" fill="#fff5f5" />
            <rect x="128" y="64" width="144" height="14" rx="6" fill="#f2192e" />
            <g fill="#f2192e">
                <rect x="144" y="96" width="22" height="22" rx="3" /><rect x="189" y="96" width="22" height="22" rx="3" /><rect x="234" y="96" width="22" height="22" rx="3" />
                <rect x="144" y="134" width="22" height="22" rx="3" /><rect x="189" y="134" width="22" height="22" rx="3" fill="#ffc34d" /><rect x="234" y="134" width="22" height="22" rx="3" />
                <rect x="144" y="172" width="22" height="22" rx="3" fill="#ffc34d" /><rect x="189" y="172" width="22" height="22" rx="3" /><rect x="234" y="172" width="22" height="22" rx="3" />
            </g>
            <!-- door + awning -->
            <path d="M178 214h44l6 12h-56z" fill="#f2192e" />
            <rect x="180" y="226" width="40" height="44" rx="3" fill="#9b0f1c" />
            <rect x="198" y="226" width="2" height="44" fill="#fff5f5" opacity=".6" />
            <!-- hotel sign -->
            <rect x="168" y="40" width="64" height="26" rx="6" fill="#fff" />
            <text x="200" y="58" text-anchor="middle" font-family="Poppins, sans-serif" font-weight="700" font-size="13" fill="#f2192e" letter-spacing="2">HOTEL</text>
            <!-- floating: booked card -->
            <g transform="translate(290 40)">
                <rect width="86" height="40" rx="10" fill="#fff" />
                <circle cx="20" cy="20" r="11" fill="#f2192e" />
                <path d="M14.5 20.5l4 4 7-8" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                <rect x="38" y="13" width="38" height="5" rx="2.5" fill="#d9d9d9" />
                <rect x="38" y="23" width="26" height="5" rx="2.5" fill="#f2b3b8" />
            </g>
            <!-- floating: key -->
            <g transform="translate(40 82)" fill="none" stroke="#ffc34d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M20 19l22 22M32 31l6-6M38 37l6-6" />
            </g>
            <!-- floating: bell -->
            <g transform="translate(332 94)" fill="#ffc34d">
                <path d="M16 2a3 3 0 013 3v1.2A10 10 0 0126 16v7l3 4H3l3-4v-7a10 10 0 017-9.8V5a3 3 0 013-3z" />
                <path d="M12 29h8a4 4 0 01-8 0z" />
            </g>
            <!-- sparkles -->
            <g fill="#fff">
                <path d="M110 34l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" opacity=".9" />
                <path d="M262 22l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" opacity=".8" />
                <path d="M376 150l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" opacity=".7" />
                <circle cx="30" cy="200" r="3" opacity=".6" /><circle cx="388" cy="60" r="3" opacity=".6" />
            </g>
        </svg>
</template>

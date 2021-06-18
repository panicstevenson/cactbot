Options.Triggers.push({
  zoneId: ZoneId.TheBindingCoilOfBahamutTurn4,
  timelineFile: 't4.txt',
  triggers: [
    {
      id: 'T4 Gravity Thrust',
      netRegex: NetRegexes.startsUsing({ source: 'Spinner-Rook', id: '4D4' }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Drehturm', id: '4D4' }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Drone-Drille', id: '4D4' }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ルークスピナー', id: '4D4' }),
      netRegexCn: NetRegexes.startsUsing({ source: '转盘堡', id: '4D4' }),
      netRegexKo: NetRegexes.startsUsing({ source: '보루형 회전전차', id: '4D4' }),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'LOS Thrust',
          de: 'LOS Gravitationsschlag',
          fr: 'LOS Percée gravitationelle',
          ja: 'グラビデカノン',
          cn: '死刑',
        },
      },
    },
    {
      id: 'T4 Pox',
      netRegex: NetRegexes.startsUsing({ source: 'Spinner-Rook', id: '4D5' }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Drehturm', id: '4D5' }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Drone-Drille', id: '4D5' }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ルークスピナー', id: '4D5' }),
      netRegexCn: NetRegexes.startsUsing({ source: '转盘堡', id: '4D5' }),
      netRegexKo: NetRegexes.startsUsing({ source: '보루형 회전전차', id: '4D5' }),
      condition: Conditions.targetIsYou(),
      alarmText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'LOS Pox',
          de: 'LOS Pocken',
          fr: 'LOS Vérole',
          ja: 'ポックス',
          cn: '血量上限降低',
        },
      },
    },
    {
      id: 'T4 Reminder',
      netRegex: NetRegexes.addedCombatant({ name: 'Clockwork Knight', capture: false }),
      netRegexDe: NetRegexes.addedCombatant({ name: 'Uhrwerk-Ritter', capture: false }),
      netRegexFr: NetRegexes.addedCombatant({ name: 'Chevalier Mécanique', capture: false }),
      netRegexJa: NetRegexes.addedCombatant({ name: 'アラガンワーク・ナイト', capture: false }),
      netRegexCn: NetRegexes.addedCombatant({ name: '亚拉戈发条骑士', capture: false }),
      netRegexKo: NetRegexes.addedCombatant({ name: '알라그 태엽기사', capture: false }),
      suppressSeconds: 100000,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Magic on Soldier, Physical on Knights',
          de: 'Magier auf Soldat, Physische auf Ritter',
          fr: 'Magique sur Soldat, Physique sur Chevalier',
          ja: '魔法はソルジャー、物理はナイト',
          cn: '法系打士兵，物理打骑士',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Clockwork Bug': 'Uhrwerk-Wanze',
        'Clockwork Dreadnaught': 'Brummonaut',
        'Clockwork Knight': 'Uhrwerk-Ritter',
        'Drive Cylinder': 'Antriebszylinder',
        'Spinner-rook': 'Drehturm',
      },
      'replaceText': {
        'Bug': 'Wanze',
        'Dreadnaught': 'Brummonaut',
        'Emergency Override': 'Not-Übersteuerung',
        'Knight': 'Ritter',
        'Rook': 'Drehturm',
        'Soldier': 'Soldat',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Clockwork Bug': 'Insecte Mécanique',
        'Clockwork Dreadnaught': 'Cuirassé Dreadnaught',
        'Clockwork Knight': 'Chevalier Mécanique',
        'Drive Cylinder': 'Cylindre Propulseur',
        'Spinner-rook': 'Drone-Drille',
      },
      'replaceText': {
        'Bug': 'Insecte',
        'Dreadnaught': 'Cuirassé',
        'Emergency Override': 'Annulation d\'urgence',
        'Knight': 'Chevalier',
        'Rook': 'Drone',
        'Soldier': 'Soldat',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Clockwork Bug': 'アラガンワーク・バグ',
        'Clockwork Dreadnaught': 'ドレッドノート',
        'Clockwork Knight': 'アラガンワーク・ナイト',
        'Drive Cylinder': '稼働隔壁',
        'Spinner-rook': 'ルークスピナー',
      },
      'replaceText': {
        'Bug': 'アラガンワーク・バグ',
        'Dreadnaught': 'ドレッドノート',
        'Emergency Override': 'エマージェンシー・オーバーライド',
        'Knight': 'ナイト',
        'Rook': 'ルーク',
        'Soldier': 'ソルジャー',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Clockwork Bug': '亚拉戈发条虫',
        'Clockwork Dreadnaught': '恐慌装甲',
        'Clockwork Knight': '亚拉戈发条骑士',
        'Drive Cylinder': '隔离壁',
        'Spinner-rook': '转盘堡',
      },
      'replaceText': {
        'Bug': '故障虫',
        'Dreadnaught': '恐慌装甲',
        'Emergency Override': '紧急超驰控制',
        'Knight': '亚拉戈发条骑士',
        'Rook': '转盘堡',
        'Soldier': '亚拉戈发条士兵',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Clockwork Bug': '알라그 태엽벌레',
        'Clockwork Dreadnaught': '드레드노트',
        'Clockwork Knight': '알라그 태엽기사',
        'Drive Cylinder': '가동격벽',
        'Spinner-rook': '보루형 회전전차',
      },
      'replaceText': {
        'Bug': '버그',
        'Dreadnaught': '드레드노트',
        'Emergency Override': '긴급 체제 변환',
        'Knight': '기사',
        'Soldier': '병사',
        'Rook': '회전전차',
      },
    },
  ],
});

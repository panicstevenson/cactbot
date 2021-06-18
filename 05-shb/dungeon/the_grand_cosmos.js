Options.Triggers.push({
  zoneId: ZoneId.TheGrandCosmos,
  timelineFile: 'the_grand_cosmos.txt',
  triggers: [
    {
      id: 'Cosmos Shadowbolt',
      netRegex: NetRegexes.startsUsing({ id: '4769', source: 'Seeker Of Solitude' }),
      netRegexDe: NetRegexes.startsUsing({ id: '4769', source: 'Einsiedler' }),
      netRegexFr: NetRegexes.startsUsing({ id: '4769', source: 'Ermite Du Palais' }),
      netRegexJa: NetRegexes.startsUsing({ id: '4769', source: '宮殿の隠者' }),
      netRegexCn: NetRegexes.startsUsing({ id: '4769', source: '宫殿的隐者' }),
      netRegexKo: NetRegexes.startsUsing({ id: '4769', source: '궁전의 은자' }),
      condition: (data, matches) => matches.target === data.me || data.role === 'healer',
      response: Responses.tankBuster(),
    },
    {
      id: 'Cosmos Dark Pulse',
      netRegex: NetRegexes.headMarker({ id: '003E' }),
      response: Responses.stackMarkerOn('info'),
    },
    {
      id: 'Cosmos Dark Well Far Winds',
      netRegex: NetRegexes.headMarker({ id: '0060' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Cosmos Immortal Anathema',
      netRegex: NetRegexes.startsUsing({ id: '49A3', source: 'Seeker Of Solitude', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '49A3', source: 'Einsiedler', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '49A3', source: 'Ermite Du Palais', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '49A3', source: '宮殿の隠者', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '49A3', source: '宫殿的隐者', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '49A3', source: '궁전의 은자', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Cosmos Tribulation',
      netRegex: NetRegexes.startsUsing({ id: '476B', source: 'Seeker Of Solitude', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '476B', source: 'Einsiedler', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '476B', source: 'Ermite Du Palais', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '476B', source: '宮殿の隠者', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '476B', source: '宫殿的隐者', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '476B', source: '궁전의 은자', capture: false }),
      delaySeconds: 8,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Avoid Brooms',
          de: 'Besen ausweichen',
          fr: 'Évitez les balais',
          ja: 'ほうきを避ける',
          cn: '躲扫把',
          ko: '빗자루 피하기',
        },
      },
    },
    {
      id: 'Cosmos Storm of Color',
      netRegex: NetRegexes.startsUsing({ id: '471B', source: 'Leannan Sith' }),
      netRegexDe: NetRegexes.startsUsing({ id: '471B', source: 'Leanan Sidhe' }),
      netRegexFr: NetRegexes.startsUsing({ id: '471B', source: 'Leannan Sith' }),
      netRegexJa: NetRegexes.startsUsing({ id: '471B', source: 'リャナンシー' }),
      netRegexCn: NetRegexes.startsUsing({ id: '471B', source: '凉南希' }),
      netRegexKo: NetRegexes.startsUsing({ id: '471B', source: '랴난시' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Cosmos Ode To Lost Love',
      netRegex: NetRegexes.startsUsing({ id: '471C', source: 'Leannan Sith', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '471C', source: 'Leanan Sidhe', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '471C', source: 'Leannan Sith', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '471C', source: 'リャナンシー', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '471C', source: '凉南希', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '471C', source: '랴난시', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      // Can't use added combatant here as all these adds exist.
      // So, just trigger on first auto.
      id: 'Cosmos Direct Seeding Mistake',
      netRegex: NetRegexes.ability({ id: '368', source: 'Lover\'s Ring', capture: false }),
      netRegexDe: NetRegexes.ability({ id: '368', source: 'Keim Des Geliebten', capture: false }),
      netRegexFr: NetRegexes.ability({ id: '368', source: 'Bague De L\'Amoureux', capture: false }),
      netRegexJa: NetRegexes.ability({ id: '368', source: 'ラヴァーズリング', capture: false }),
      netRegexCn: NetRegexes.ability({ id: '368', source: '恋人之戒', capture: false }),
      netRegexKo: NetRegexes.ability({ id: '368', source: '연인의 반지', capture: false }),
      suppressSeconds: 60,
      response: Responses.killExtraAdd(),
    },
    {
      id: 'Cosmos Gardener\'s Hymn',
      netRegex: NetRegexes.startsUsing({ id: '471E', source: 'Leannan Sith', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '471E', source: 'Leanan Sidhe', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '471E', source: 'Leannan Sith', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '471E', source: 'リャナンシー', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '471E', source: '凉南希', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '471E', source: '랴난시', capture: false }),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'put seeds on dirt',
          de: 'Samen auf den nicht bewachsenen Boden legen',
          fr: 'Mettez les graines sur la terre',
          ja: '種を土に置かないように',
          cn: '种子搬离AOE',
          ko: '씨앗 자라지 못하게 하기',
        },
      },
    },
    {
      id: 'Cosmos Ronkan Cure II',
      netRegex: NetRegexes.startsUsing({ id: '4931', source: 'Ser Hamonth' }),
      netRegexDe: NetRegexes.startsUsing({ id: '4931', source: 'Sir Hamonth' }),
      netRegexFr: NetRegexes.startsUsing({ id: '4931', source: 'Sire Hamonth' }),
      netRegexJa: NetRegexes.startsUsing({ id: '4931', source: '幻影騎士ハモンス' }),
      netRegexCn: NetRegexes.startsUsing({ id: '4931', source: '幻影骑士哈蒙斯' }),
      netRegexKo: NetRegexes.startsUsing({ id: '4931', source: '환영기사 하몬스' }),
      condition: (data) => data.CanStun(),
      response: Responses.stun('info'),
    },
    {
      id: 'Cosmos Captive Bolt',
      netRegex: NetRegexes.startsUsing({ id: '4764', source: 'Lugus' }),
      netRegexDe: NetRegexes.startsUsing({ id: '4764', source: 'Lugus' }),
      netRegexFr: NetRegexes.startsUsing({ id: '4764', source: 'Lugus' }),
      netRegexJa: NetRegexes.startsUsing({ id: '4764', source: 'ルゴス' }),
      netRegexCn: NetRegexes.startsUsing({ id: '4764', source: '卢格斯' }),
      netRegexKo: NetRegexes.startsUsing({ id: '4764', source: '루구스' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Cosmos Culling Blade',
      netRegex: NetRegexes.startsUsing({ id: '4765', source: 'Lugus', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '4765', source: 'Lugus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '4765', source: 'Lugus', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '4765', source: 'ルゴス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '4765', source: '卢格斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '4765', source: '루구스', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Cosmos Black Flame 1',
      netRegex: NetRegexes.headMarker({ id: '0019' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Cosmos Black Flame 2',
      netRegex: NetRegexes.headMarker({ id: '0019' }),
      condition: Conditions.targetIsYou(),
      delaySeconds: 4,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Dodge Crosses',
          de: 'Den Kreuzen ausweichen',
          fr: 'Esquivez les croix',
          ja: '十字を避ける',
          cn: '躲避交叉',
          ko: '십자 장판 피하기',
        },
      },
    },
    {
      id: 'Cosmos Mortal Flame 1',
      netRegex: NetRegexes.headMarker({ id: '00C3' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Cosmos Mortal Flame 2',
      netRegex: NetRegexes.headMarker({ id: '00C3' }),
      condition: Conditions.targetIsYou(),
      delaySeconds: 5.5,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Touch Furniture',
          de: 'Einrichtung berühren',
          fr: 'Touchez un meuble',
          ja: '調度品に寄る',
          cn: '传火家具',
          ko: '가구에 불 옮기기',
        },
      },
    },
    {
      id: 'Cosmos Scorching Left',
      netRegex: NetRegexes.startsUsing({ id: '4763', source: 'Lugus', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '4763', source: 'Lugus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '4763', source: 'Lugus', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '4763', source: 'ルゴス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '4763', source: '卢格斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '4763', source: '루구스', capture: false }),
      response: Responses.goRight('info'),
    },
    {
      id: 'Cosmos Scorching Right',
      netRegex: NetRegexes.startsUsing({ id: '4762', source: 'Lugus', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '4762', source: 'Lugus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '4762', source: 'Lugus', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '4762', source: 'ルゴス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '4762', source: '卢格斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '4762', source: '루구스', capture: false }),
      response: Responses.goLeft('info'),
    },
    {
      id: 'Cosmos Fire\'s Domain',
      netRegex: NetRegexes.headMarker({ id: '003[2345]' }),
      condition: Conditions.targetIsYou(),
      preRun: (data) => {
        data.firesDomain = (data.firesDomain || 0) + 1;
      },
      infoText: (data, _matches, output) => {
        if (data.firesDomain === 1)
          return output.pointTetherAwayFromFurniture();
        return output.tetherOnYou();
      },
      outputStrings: {
        pointTetherAwayFromFurniture: {
          en: 'Point Tether Away From Furniture',
          de: 'Verbindung weg von der Einrichtung zeigen',
          fr: 'Pointez le lien éloigné des meubles',
          ja: '調度品に当たらないように',
          cn: '连线不要打到家具',
          ko: '징: 장판이 가구에 닿지 않게 하기',
        },
        tetherOnYou: {
          en: 'Tether on YOU',
          de: 'Verbindung auf DIR',
          fr: 'Lien sur VOUS',
          ja: '線ついた',
          cn: '连线点名',
          ko: '징 대상자',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Ser Hamonth': 'Sir Hamonth',
        'Lover\'s Ring': 'Keim Des Geliebten',
        'Enslaved Love': 'versklavt(?:e|er|es|en) Liebhaber',
        'Leannan Sith': 'Leanan Sidhe',
        'Lugus': 'Lugus',
        'Seeker of Solitude': 'Einsiedler',
        'The Chamber of Celestial Song': 'Großen Vergnügungen',
        'The Font of Quintessence': 'Broderieparterre',
        'The Martial Court': 'Kleinen Stufenarkade',
      },
      'replaceText': {
        'Black Flame': 'Finsterer Flammenwind',
        'Captive Bolt': 'Schmetterklinge',
        'Culling Blade': 'Schockschnitt',
        'Dark Pulse': 'Dunkle Welle',
        'Dark Shock': 'Angriff aus dem Dunkeln',
        'Dark Well': 'Dunkles Bersten',
        'Direct Seeding': 'Bedecktbesamung',
        '(?<! )Far Wind': 'Heller Sturm',
        'Fire\'s Domain': 'Heißer Höllensturm',
        'Fire\'s Ire': 'Holistisches Höllenfeuer',
        'Gardener\'s Hymn': 'Wiegenlied der Sprösslinge',
        'Immortal Anathema': 'Ewiger Bannfluch',
        'Ireful Wind': 'Starke Bö',
        'Mortal Flame': 'Ewige Flammen',
        'Ode To Fallen Petals': 'Stimme des Blumensturms',
        'Ode To Far Winds': 'Stimme des hellen Sturms',
        'Ode To Lost Love': 'Unerwiderte Liebe',
        'Otherworldly Heat': 'Sengendes Seelenbrennen',
        'Plummet': 'Abfallen',
        'Scorching Left/Right': 'Linker/Rechter Höllenhieb',
        'Shadowbolt': 'Schattenramme',
        'Storm Of Color': 'Frühlingssturm',
        'Tribulation': 'Schwermütiges Zaudern',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Ser Hamonth': 'Sire Hamonth',
        'Lover\'s Ring': 'Bague De L\'Amoureux',
        'Enslaved Love': 'Amour Asservi',
        'Leannan Sith': 'Leannan Sith',
        'Lugus': 'Lugus',
        'Seeker of Solitude': 'Ermite du Palais',
        'The Martial Court': 'La Cour martiale',
        'The Font of Quintessence': 'La Source de Quintessence',
        'The Chamber of Celestial Song': 'Chœur céleste',
      },
      'replaceText': {
        'Black Flame': 'Torrent fuligineux',
        'Captive Bolt': 'Lame pulvérisante',
        'Culling Blade': 'Lame percutante',
        'Dark Pulse': 'Déluge noir',
        'Dark Shock': 'Onde ténébreuse',
        'Dark Well': 'Déflagration ténébreuse',
        'Direct Seeding': 'Semis direct',
        '(?<! )Far Wind': 'Claire tempête',
        'Fire\'s Domain': 'Fournaise infernale',
        'Fire\'s Ire': 'Étincelle infernale',
        'Gardener\'s Hymn': 'Ballade du bourgeonnement',
        'Immortal Anathema': 'Anathème immortel',
        'Ireful Wind': 'Ouragan violent',
        'Mortal Flame': 'Flamme mortelle',
        'Ode To Fallen Petals': 'Mélodie florale',
        'Ode To Far Winds': 'Aria de tempête',
        'Ode To Lost Love': 'Rhapsodie de l\'amour fou',
        'Otherworldly Heat': 'Croix de feu',
        'Plummet': 'Chute',
        'Scorching Left/Right': 'Scrutement senestre/dextre',
        'Shadowbolt': 'Éclair ombreux',
        'Storm Of Color': 'Orage de printemps',
        'Tribulation': 'Tribulation',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Ser Hamonth': '幻影騎士ハモンス',
        'Lover\'s Ring': 'ラヴァーズリング',
        'Enslaved Love': 'エンスレイブド・ラヴ',
        'Leannan Sith': 'リャナンシー',
        'Lugus': 'ルゴス',
        'Seeker of Solitude': '宮殿の隠者',
        'The Martial Court': '兵棋の間',
        'The Font of Quintessence': '春の泉',
        'The Chamber of Celestial Song': '演奏の間',
      },
      'replaceText': {
        'Black Flame': '黒炎流',
        'Captive Bolt': '破砕斬',
        'Culling Blade': '衝撃斬',
        'Dark Pulse': '黒の波動',
        'Dark Shock': '黒の衝撃',
        'Dark Well': '黒の爆砕',
        'Direct Seeding': 'ダイレクトシーディング',
        '(?<! )Far Wind': '晴嵐',
        'Fire\'s Domain': '炎獄殺',
        'Fire\'s Ire': '炎獄閃',
        'Gardener\'s Hymn': '萌芽への謡',
        'Immortal Anathema': 'イモータルアナテーマ ',
        'Ireful Wind': '強風',
        'Mortal Flame': '必滅の炎',
        'Ode To Fallen Petals': '花嵐の歌声',
        'Ode To Far Winds': '晴嵐の歌声',
        'Ode To Lost Love': '狂愛の歌声',
        'Otherworldly Heat': '鬼炎斬',
        'Plummet': '落下',
        'Scorching Left/Right': '左/右辺炎獄斬',
        'Shadowbolt': 'シャドウボルト',
        'Storm Of Color': '春嵐',
        'Tribulation': 'トリビュレーション',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Ser Hamonth': '幻影骑士哈蒙斯',
        'Lover\'s Ring': '恋人之戒',
        'Enslaved Love': '被奴役的爱',
        'Leannan Sith': '凉南希',
        'Lugus': '卢格斯',
        'Seeker of Solitude': '宫殿的隐者',
        'The Chamber of Celestial Song': '演奏之间',
        'The Font of Quintessence': '春水涌泉',
        'The Martial Court': '兵棋之间',
      },
      'replaceText': {
        'Black Flame': '黑炎流',
        'Captive Bolt': '破碎斩',
        'Culling Blade': '冲击斩',
        'Dark Pulse': '黑暗波动',
        'Dark Shock': '黑暗冲击',
        'Dark Well': '黑暗爆碎',
        'Direct Seeding': '直接播种',
        '(?<! )Far Wind': '(?<! )远风',
        'Fire\'s Domain': '炎狱杀',
        'Fire\'s Ire': '炎狱闪',
        'Gardener\'s Hymn': '育芽之谣',
        'Immortal Anathema': '不朽的诅咒',
        'Ireful Wind': '强风',
        'Mortal Flame': '必灭之炎',
        'Ode To Fallen Petals': '花雨之歌',
        'Ode To Far Winds': '晴岚之歌',
        'Ode To Lost Love': '狂爱之歌',
        'Otherworldly Heat': '鬼炎斩',
        'Plummet': '掉落',
        'Scorching Left/Right': '左/右炎狱斩',
        'Shadowbolt': '暗影雷',
        'Storm Of Color': '春风',
        'Tribulation': '苦难',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Ser Hamonth': '환영기사 하몬스',
        'Lover\'s Ring': '연인의 반지',
        'Enslaved Love': '예속된 사랑',
        'Leannan Sith': '랴난시',
        'Lugus': '루구스',
        'Seeker of Solitude': '궁전의 은자',
        'The Chamber of Celestial Song': '연주실',
        'The Font of Quintessence': '봄바람 샘',
        'The Martial Court': '전술실',
      },
      'replaceText': {
        'Black Flame': '흑염류',
        'Captive Bolt': '파쇄참',
        'Culling Blade': '충격참',
        'Dark Pulse': '검은 파동',
        'Dark Shock': '검은 충격',
        'Dark Well': '검은 폭쇄',
        'Direct Seeding': '곧뿌림',
        '(?<! )Far Wind': '산바람',
        'Fire\'s Domain': '염옥살',
        'Fire\'s Ire': '염옥섬',
        'Gardener\'s Hymn': '새싹을 위한 노래',
        'Immortal Anathema': '불멸 혐오',
        'Ireful Wind': '강풍',
        'Mortal Flame': '필멸의 불꽃',
        'Ode To Fallen Petals': '꽃바람의 노래',
        'Ode To Far Winds': '산바람의 노래',
        'Ode To Lost Love': '광적인 사랑 노래',
        'Otherworldly Heat': '귀염참',
        'Plummet': '낙하',
        'Scorching Left/Right': '염옥 좌측/우측베기',
        'Shadowbolt': '그림자 번개',
        'Storm Of Color': '봄바람',
        'Tribulation': '환난',
      },
    },
  ],
});

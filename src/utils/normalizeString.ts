export const normalizeString = (str: string): string => {
  return (
    str
      .toLowerCase()
      // ひらがなをカタカナに変換
      .replace(/[\u3041-\u3096]/g, (match) =>
        String.fromCharCode(match.charCodeAt(0) + 0x60)
      )
      // 全角英数字を半角に変換
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
        String.fromCharCode(s.charCodeAt(0) - 0xfee0)
      )
      // 半角カタカナを全角カタカナに変換
      .replace(/[\uFF61-\uFF9F]/g, (match) => {
        const katakanaMap: { [key: string]: string } = {
          ｱ: "ア",
          ｲ: "イ",
          ｳ: "ウ",
          ｴ: "エ",
          ｵ: "オ",
          // 必要に応じて他の文字も追加
        };
        return katakanaMap[match] || match;
      })
  );
};

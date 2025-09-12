// 翻訳機能のユーティリティ
// MyMemory APIを使用して英語から日本語への翻訳を行う

interface TranslationResponse {
  translatedText: string;
  match: number;
}

interface MyMemoryResponse {
  responseData: {
    translatedText: string;
    match: number;
  };
  quotaFinished?: boolean;
  mtLangSupported?: boolean;
  responseDetails?: string;
  responseStatus?: number;
}

// 翻訳キャッシュ
const translationCache = new Map<string, string>();

// テキストを日本語に翻訳する関数
export async function translateToJapanese(text: string): Promise<string> {
  if (!text || text.trim().length === 0) {
    return text;
  }

  // キャッシュをチェック
  const cacheKey = text.toLowerCase().trim();
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  try {
    // MyMemory APIを使用して翻訳
    const encodedText = encodeURIComponent(text);
    const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=en|ja`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.warn('Translation API failed, returning original text');
      return text;
    }

    const data: MyMemoryResponse = await response.json();
    
    if (data.responseData && data.responseData.translatedText) {
      const translatedText = data.responseData.translatedText;
      
      // 翻訳結果が元のテキストと同じ場合は翻訳失敗とみなす
      if (translatedText.toLowerCase() === text.toLowerCase()) {
        return text;
      }
      
      // キャッシュに保存
      translationCache.set(cacheKey, translatedText);
      
      return translatedText;
    }

    return text;
  } catch (error) {
    console.warn('Translation error:', error);
    return text;
  }
}

// 複数のテキストを並列で翻訳する関数
export async function translateMultipleToJapanese(texts: string[]): Promise<string[]> {
  const promises = texts.map(text => translateToJapanese(text));
  return Promise.all(promises);
}

// 翻訳キャッシュをクリアする関数
export function clearTranslationCache(): void {
  translationCache.clear();
}

// キャッシュサイズを取得する関数
export function getCacheSize(): number {
  return translationCache.size;
}

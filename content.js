// 背景色を変更する関数
function changeBackgroundColor() {
  // PRのリストを取得
  const prList = document.querySelectorAll(".js-issue-row");

  prList.forEach((pr) => {
    // "Review required before merging"が存在するかどうかを確認
    const reviewRequired = pr.querySelector(
      '[aria-label="Review required before merging"]'
    );

    if (reviewRequired) {
      // "Review required before merging"が存在する場合、背景色をカスタムプロパティの値に変更
      pr.style.background =
        "var(--background-CVarea-blue, linear-gradient(126deg, #EBFBF3 0.94%, #ECF6FF 100%))";
    } else {
      // "Review required before merging"が存在しない場合、背景色をデフォルト（白）に設定
      pr.style.backgroundColor = "#FFFFFF";
    }
  });
}

// DOMの変更を監視する
const observer = new MutationObserver(changeBackgroundColor);
observer.observe(document.body, { childList: true, subtree: true });

// 初回実行
changeBackgroundColor();

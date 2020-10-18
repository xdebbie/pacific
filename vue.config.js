module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
          @import "@/scss/_main.scss";
        `,
			},
		},
	},
};

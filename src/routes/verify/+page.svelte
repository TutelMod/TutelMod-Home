<script>
	let code = "";
	let message = "";
	let loading = false;

	async function verify() {
		message = "";
		loading = true;

		try {
			const res = await fetch("http://localhost:6677/verify", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ code })
			});

			const data = await res.json();

			if (data.success) {
				message = "Verified.";
			} else {
				message = data.error || "Failed.";
			}
		} catch {
			message = "Server error.";
		}

		loading = false;
	}
</script>

<main>
	<div class="box">
		<h1>Verification</h1>

		<p>Enter your code that you got from the Discord bot</p>

		<input
			type="text"
			bind:value={code}
			placeholder="Code"
			maxlength="10"
		/>

		<button on:click={verify} disabled={loading || !code}>
			{loading ? "Checking..." : "Submit"}
		</button>

		{#if message}
			<p class="msg">{message}</p>
		{/if}
	</div>
</main>

<style>
	main {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #0d0d0f;
		font-family: system-ui, sans-serif;
		color: #e5e5e5;
	}

	.box {
		width: 300px;
		padding: 24px;
		border: 1px solid #222;
		border-radius: 10px;
		background: #111;
	}

	h1 {
		font-size: 18px;
		margin-bottom: 10px;
	}

	p {
		font-size: 13px;
		color: #aaa;
		margin-bottom: 12px;
	}

	input {
		width: 100%;
		padding: 8px;
		background: #0a0a0a;
		border: 1px solid #222;
		color: white;
		border-radius: 6px;
		margin-bottom: 10px;
		outline: none;
	}

	button {
		width: 100%;
		padding: 8px;
		background: #1f1f1f;
		border: 1px solid #333;
		color: white;
		border-radius: 6px;
		cursor: pointer;
	}

	button:hover {
		background: #2a2a2a;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.msg {
		margin-top: 10px;
		font-size: 13px;
		color: #ccc;
	}
</style>